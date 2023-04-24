import {create} from 'zustand';

interface IPreferenceModal{
    isOpen : boolean;
    onOpen : ()=> void;
    onClose : ()=> void;
}

const usePrefernceModal = create<IPreferenceModal>()((set)=>({
    isOpen : false,
    onOpen : () => set({isOpen : true}),
    onClose : ()=> set({isOpen : false})
}));

export default usePrefernceModal;