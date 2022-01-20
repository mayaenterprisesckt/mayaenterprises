import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { VFC, memo } from "react";
import { useTheme } from "next-themes";
const DarkModeToggle: VFC<any> = memo(() => {
    const { theme, setTheme } = useTheme();
    const { colorMode, toggleColorMode } = useColorMode();

    const darkmode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        toggleColorMode();
    };
    return (
        <>
            <IconButton
                aria-label="theme toggle"
                icon={
                    colorMode === "light" ? (
                        <RiMoonFill className="text-primaryDark  dark:text-[#FFFFFF]" />
                    ) : (
                        <RiSunLine className="text-primaryDark  dark:text-[#FFFFFF]" />
                    )
                }
                onClick={darkmode}
            />
        </>
    );
});

DarkModeToggle.displayName = "DarkModeToggle";

export default DarkModeToggle;
