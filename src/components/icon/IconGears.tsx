import React from "react";
import gearsIcon from '../../assets/img/gears.svg'

type IconGearsPropsType = {
    iconId?: string,
    width?: string,
    height?: string,
    viewBox?: string,
}

export const IconGears = (props: IconGearsPropsType) => {
    return(
        <svg  width={props.width || "60"} height={props.height || "30"} viewBox={props.viewBox || "0 0 24 21"}   fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${gearsIcon}#${props.iconId}` }/>
        </svg>
    )
}