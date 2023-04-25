import { Container } from "./style";
import {RxPlus} from "react-icons/rx";

export default function ButtonText({ title, icon, ...rest }) {
   return(
   <Container type="button" {...rest}>
         <RxPlus />
        {title}
    </Container>
   );
}
