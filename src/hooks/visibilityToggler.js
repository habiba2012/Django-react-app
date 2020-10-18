import React, { useState } from 'react'

export const visibilityToggler = (component, visibility = false) => {
    const [visible, setVisiblity] = useState(() => visibility);

    return [
        visible ? component : null,
        () => setVisiblity((v) => !v)
    ]
}
