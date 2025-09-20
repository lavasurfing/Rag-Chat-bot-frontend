// server function to check which button is clicked
const CheckClick = (buttonType: string) => {
    switch (buttonType) {
        case 'upload':
            alert('Upload clicked');
            break;
        case 'send':
            alert('Send clicked');
            break;
        default:
            break;
    }
};
export default { CheckClick };