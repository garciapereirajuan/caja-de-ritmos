const addClassTemp = (element, newClass, time) => {
    element.classList.add(newClass);
    time && setTimeout(()=>element.classList.remove(newClass), time);
};

export default addClassTemp;