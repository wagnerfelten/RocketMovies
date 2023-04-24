import { Container } from "./style";

export default function ButtonText({ title, ...rest }) {
   return(
   <Container type="button" {...rest}>
        {title}
    </Container>
   );
}
