import { ImageSlider } from "../components/ImageSlider";
import { Media } from "../components/Media";
import { Quote } from "../components/Quote";
import { RichText } from "../components/Richtext";
import { type Block } from "@/app/[channel]/(main)/blogs/[slug]/page";

export function postRenderer(section: Block, index: number) {
  switch (section.__component) {
    case "shared.rich-text":
      return <RichText key={index} data={section} />;
    case "shared.slider":
      return <ImageSlider key={index} data={section} />;
    case "shared.quote": 
      return <Quote key={index} data={section} />;
    case "shared.media":
      return <Media key={index} data={section} />;
    // case "shared.video-embed":
    //   return <VideoEmbed key={index} data={section} />;
    default:
      return null;
  }
}