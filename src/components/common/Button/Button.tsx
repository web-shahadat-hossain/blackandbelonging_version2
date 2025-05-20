import { ReactNode } from "react";
import styles from "./Button.module.scss";
import Spinner from "../Spinner/Spinner";

type propTypes = {
    title?: string,
    className?: string,
    fluid?: boolean,
    onClick?: () => void,
    text?: string,
    disabled?: boolean,
    children?: ReactNode,
    type?: "button" | "submit" | "reset",
    loading?: boolean,
    variant?: string,
}

const Button = (props: propTypes) => {
    return (
        <>
            <button
                onClick={props.onClick}
                type={props.type || "button"}
                disabled={props.loading || props.disabled}
                data-variant={props.variant}
                title={props.title}
                className={`${styles.btn} custom_btn ${props.className || ""} ${props.fluid ? "w-100" : ""}`}
            >
                {
                    props.loading ? <Spinner /> : props.text || props.children
                }
            </button>
        </>
    )
}

export default Button
