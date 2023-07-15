import { useRef, useState } from "react";
import { spring, useVariants  } from "../../config";
import { motion } from "framer-motion";

const CursorFollower = () => {
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");
    const ref = useRef(null);

    const variants = useVariants(ref);

    return(
        <motion.div
            variants={variants}
            className="circle"
            animate={cursorVariant}
            transition={spring}
          ></motion.div>
    )
}

export default CursorFollower