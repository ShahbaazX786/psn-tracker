import { Link } from "@nextui-org/link";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href=""
        title="Developer's Portfolio"
      >
        <span className="text-default-600">Developed by</span>
        <p className="text-primary">@Shaik Shahbaaz Alam</p>
      </Link>
    </footer>
  );
};

export default Footer;
