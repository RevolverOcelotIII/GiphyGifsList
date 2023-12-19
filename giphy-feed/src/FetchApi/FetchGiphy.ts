import { Gif } from "../models/Gif";

async function getTrendingGifs() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/trending/?api_key=azgOZ6mjQdbuctMhtA0U252o181UV9s1&limit=100"
  );
  const gif_list: Gif[] = [];
  for (const gif_json of (await response.json()).data) {
    const date_split = gif_json.import_datetime.split(/[\s-:]/);
    if (gif_json.username !== "") {
      gif_list.push({
        id: gif_json.id as string,
        title: gif_json.title,
        url: gif_json.url,
        rating: gif_json.rating,
        user_title: gif_json.user.display_name,
        user_icon: gif_json.user.avatar_url,
        user_description:
          gif_json.user.description === ""
            ? "-"
            : (gif_json.user.description as string).substring(0, 80) + "...",
        username: gif_json.user.username,
        user_verified: gif_json.user.is_verified,
        image_small: gif_json.images.fixed_height.webp,
        image_large: gif_json.images.fixed_height_small.webp,
        import_date: new Date(
          parseInt(date_split[0]),
          parseInt(date_split[1]),
          parseInt(date_split[2])
        ),
      });
    } else {
      gif_list.push({
        id: gif_json.id as string,
        title: gif_json.title,
        url: gif_json.url,
        rating: gif_json.rating,
        user_title: "",
        user_icon: "",
        user_description: "-",
        username: "-",
        user_verified: false,
        image_small: gif_json.images.fixed_height.webp,
        image_large: gif_json.images.fixed_height_small.webp,
        import_date: new Date(
          parseInt(date_split[0]),
          parseInt(date_split[1]),
          parseInt(date_split[2])
        ),
      });
    }
  }
  return gif_list;
}

export { getTrendingGifs };
