import React, { useState } from 'react'
import { SearchIcon } from '../components/img/search.svg'

const SearchInput = () => {
    const [visible, setVisiblity] = useState(false);

    const Icon = (

        <SearchIcon icon={visible ? "SearchIcon" : ""}
            onClick={() => setVisiblity(visiblity => !visiblity)} />
    )

    return [Icon];
}

export default SearchInput
