const toggle = elemento => (removeClass, addClass) => {
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
}

const openHeader = id => evt => {
    const el = document.getElementById(id);
    el.classList.toggle('close');
}

export {
    openHeader
};