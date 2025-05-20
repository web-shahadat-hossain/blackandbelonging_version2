import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

type propTypes = {
    title?: string,
    className?: string,
    fluid?: boolean,
    onClick?: () => void,
    text?: string,
    disabled?: boolean,
    children?: ReactNode,
    to?: string,
    loading?: boolean,
    variant?: string,
    target?: HTMLAttributeAnchorTarget,
    rel?: string,
}

const LinkButton = (props: propTypes) => {
    return (
        <>
            <Link
                rel={props.rel}
                onClick={props.onClick}
                target={props.target}
                to={props.to || ""}
                data-disabled={props.loading || props.disabled}
                title={props.title}
                data-variant={props.variant || ""}
                className={`${styles.btn} ${props.className || ""} ${props.fluid ? "w-100" : ""}`}
            >
                {
                    props.loading ? <Spinner /> : props.text || props.children
                }
            </Link>
        </>
    )
}

export default LinkButton
