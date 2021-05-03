import Link from 'next/link';
import { motion } from "framer-motion";

const OutlinedCta = (props) => {
    return (
      <div>
        <Link href={props.url}>
          <motion.a
            whileHover={{ color: 'white', backgroundColor: "#60a5fa" }}
            className="px-2 py-1 text-sm text-blue-400 border-2 border-blue-400 rounded cursor-pointer "
          >
            {props.text}
          </motion.a>
        </Link>
      </div>
    );
}

export default OutlinedCta;