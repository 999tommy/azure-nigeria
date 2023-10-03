import { keyNoteSpeakers } from "../../assets/data/index";
import SpeakersCard from "../molecules/SpeakersCard";

function Speakers() {
  return (
    <div className="container mx-auto grid max-w-[80%] gap-4">
      {keyNoteSpeakers.map((item) => (
        <SpeakersCard key={item?.id} speakerData={item} />
      ))}
    </div>
  );
}

export default Speakers;
