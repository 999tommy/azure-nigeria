import twitterIcon from "../../assets/icons/twitter.svg";

function Footer() {
  return (
    <div className="bg-darkBlue100 py-12">
      <div className="container mx-auto grid max-w-[80%] justify-items-start gap-8 py-4 font-montserrat md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <h3 className="font-clashDisplay text-[20px] font-bold">
            <span className="font-bold text-white">get</span>
            <span className="text-lightPurple">linked</span>
          </h3>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <span className="flex w-[60%] items-center justify-between">
            <span>Terms of Use </span>
            <span className="text-lightPurple text-[20px]"> | </span>
            <span> Privacy Policy </span>
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lightPurple font-bold capitalize">
            {" "}
            Useful Links
            {" "}
          </h3>
          <ul className="space-y-2">
            <li> Overview </li>
            <li> Timeline </li>
            <li> FAQs </li>
            <li className="flex items-center gap-2">
              <span className="text-lightPurple"> Follow us </span>
              <img
                src={twitterIcon}
                alt="instagram icon "
                className="aspect-square w-6"
              />
              <img
                src={twitterIcon}
                alt="twitter icon "
                className="aspect-square w-6"
              />
              <img
                src={twitterIcon}
                alt="facebook icon "
                className="aspect-square w-6"
              />
              <img
                src={twitterIcon}
                alt="linkedin icon "
                className="aspect-square w-6"
              />
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lightPurple font-bold capitalize">
            {" "}
            Contact Us
            {" "}
          </h3>
          <ul>
            <li className="space-y-3">
              <span className="flex items-center gap-2">
                <img src={twitterIcon} alt="call icon" />
                <span> +234 679 81819 </span>
              </span>
              <span className="flex items-center gap-2">
                <img src={twitterIcon} alt="location icon" />
                <span>27,Alara Street Yaba 100012 Lagos State</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center">All rights reserved. &copy; getlinked Ltd.</p>
    </div>
  );
}

export default Footer;
