import { IEmailTemplate } from '@/typings';
export declare function useBlock(): {
    values: IEmailTemplate;
    change: <F extends string>(name: F, value?: any) => void;
    focusBlock: any;
    setFocusBlock: import("lodash").DebouncedFunc<(val: any) => void>;
    setFocusBlockValue: import("lodash").DebouncedFunc<(val: any) => void>;
    setValueByIdx: import("lodash").DebouncedFunc<(<T extends IBlockData>(idx: string, newVal: T) => void)>;
    addBlock: (params: {
        type: string;
        parentIdx: string;
        positionIndex?: number;
        payload?: any;
        canReplace?: boolean;
        json?: any;
    }) => Promise<unknown>;
    moveBlock: (sourceIdx: string, destinationIdx: string) => null | undefined;
    copyBlock: (idx: string) => void;
    removeBlock: (idx: string) => void;
    isExistBlock: (idx: string) => boolean;
    redo: () => void;
    undo: () => void;
    reset: () => void;
    redoable: boolean;
    undoable: boolean;
};
