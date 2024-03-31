import { FC } from "react";
import closeIcon from "./cross.svg";
import Image from "next/image";
import { StyledWarning } from "./StyledWarning";

export interface IWarningProps {
    clear: () => void;
    message: string;
}

export const Warning: FC<IWarningProps> = ({ message, clear }) => {
    return (
        <StyledWarning>
            {message}
            <Image
                width={20}
                height={20}
                src={closeIcon}
                alt="close"
                onClick={clear}
            />
        </StyledWarning>
    );
};
