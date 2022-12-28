import Toastify from 'toastify-js'
export default function ({
    text,
    type,
}: {
    text: string
    type: 'success' | 'error'
}) {
    return Toastify({
        text: text,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            background: type == 'success' ? '#36c148': 'red',
            borderRadius: '8px',
        },
    })
}
