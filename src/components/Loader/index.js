import { useContext } from "react"
import { BounceLoader } from 'react-spinners'

import { DarkModeContext } from "../../common/DarkModeContext"

const Loader = () => {
    const { isDarkMode } = useContext(DarkModeContext)
    const bg = isDarkMode ? 'bg-colorDark' : 'bg-white'

    return (
        <div className={'fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-100 ' + bg}>
            <BounceLoader color="#4e6bff" speedMultiplier={2} />
        </div>
    )
}

export default Loader