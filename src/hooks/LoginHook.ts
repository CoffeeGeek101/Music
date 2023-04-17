import {create} from 'zustand';

interface ILoginHook {
    isOpen : boolean;
    onOpen : () => void;
    onClose : () => void;
}

const useLoginModal = create<ILoginHook>()((set)=>({
    isOpen : false,
    onOpen : () => set({isOpen : true}),
    onClose : () => set({isOpen : false})
}))

export default useLoginModal;