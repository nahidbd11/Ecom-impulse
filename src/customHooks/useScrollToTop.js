import React, {useEffect, useState} from "react";

export default function useScrollToTop() {
    useEffect(() => {
        window.scrollTo(0, 0)
        return () => {
            <></>
        };
    }, []);

}
