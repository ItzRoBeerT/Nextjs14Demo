export default function NewDetailPage(props) {
    const { params } = props;

    return (
        <div>
            <h1>{params.id}</h1>
            <p>I will display the info here</p>
        </div>
    );
}
