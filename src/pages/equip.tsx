import { useParams } from "react-router"
import useTitle from "@hooks/useTitle";
export default function Equip() {
    useTitle({title: "Equip"})
    const { id } = useParams();
    return (
        <>
            {id}
        </>
    )
}