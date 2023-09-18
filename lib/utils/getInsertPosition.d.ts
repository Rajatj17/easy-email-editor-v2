import { IPage } from 'easy-email-core';
import { DirectionPosition } from './getDirectionPosition';
interface Params {
    context: {
        content: IPage;
    };
    idx: string;
    directionPosition: DirectionPosition;
    dragType: string;
}
export declare function getInsertPosition(params: Params): {
    parentIdx: any;
    insertIndex: any;
    endDirection: string;
    hoverIdx: any;
} | null;
export {};
