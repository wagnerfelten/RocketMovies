import {Container} from "./style";

export default function Input({Icon, ...rest}){
    return(
    <Container>
        <input {...rest} />
    </Container>
    );
}