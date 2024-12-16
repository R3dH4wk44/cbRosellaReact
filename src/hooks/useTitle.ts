import { useEffect } from "react";

type UseTitleProps = {
    title: string;
}

export default function useTitle({ title }: UseTitleProps) {

    useEffect(() => {
        document.title = title;
    }, [title]);

}