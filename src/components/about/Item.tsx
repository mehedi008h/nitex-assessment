import CountUp from "react-countup";

interface Props {
    count: number;
    title: string;
    description: string;
}
const Item = ({ count, title, description }: Props) => {
    return (
        <div>
            <h1>
                <CountUp end={count} />
            </h1>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Item;
