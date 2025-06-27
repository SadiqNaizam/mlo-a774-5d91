import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

// A self-contained SVG component for the Google icon
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Google</title>
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.3 1.63-4.38 1.63-3.82 0-6.94-3.1-6.94-6.93s3.12-6.93 6.94-6.93c1.79 0 3.22.69 4.21 1.64l2.5-2.5C17.96 3.06 15.49 2 12.48 2c-5.49 0-9.95 4.46-9.95 9.95s4.46 9.95 9.95 9.95c3.39 0 5.89-1.12 7.84-3.08 2.02-2.02 2.62-5.02 2.62-8.33 0-.58-.05-1.15-.14-1.69h-10.2z" />
    </svg>
);

const SocialLoginButtons: React.FC = () => {
    console.log('SocialLoginButtons loaded');

    const handleGoogleLogin = () => {
        // Placeholder for Google login logic
        console.log("Google login initiated");
    };

    const handleGitHubLogin = () => {
        // Placeholder for GitHub login logic
        console.log("GitHub login initiated");
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" type="button" onClick={handleGoogleLogin}>
                <GoogleIcon className="mr-2 h-4 w-4" />
                Google
            </Button>
            <Button variant="outline" type="button" onClick={handleGitHubLogin}>
                <Github className="mr-2 h-4 w-4" />
                GitHub
            </Button>
        </div>
    );
};

export default SocialLoginButtons;