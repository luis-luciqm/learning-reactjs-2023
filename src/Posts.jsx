// props: { author, description }

export function Post(props){
    return (
        <div>
            <strong>Nome do autor: {props.author}</strong>
            <p>Descrição: {props.description}</p>
        </div>
    )
}