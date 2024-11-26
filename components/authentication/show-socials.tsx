import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signInWithGithub } from "@/actions/authentication";

const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      <Button
        className="w-full"
        variant="outline"
        formAction={signInWithGithub}
      >
        <FaGithub />
        GitHub
      </Button>
      <Button className="w-full" variant="secondary">
        <FcGoogle />
        Google
      </Button>
    </div>
  );
};

export default Socials;