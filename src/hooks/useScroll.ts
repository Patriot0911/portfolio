import {
    IUseScrollReturn,
    TRefsArray
} from '../types';
import { useRef } from 'react';

const useScroll = (count: number ): IUseScrollReturn => {
    const refsArray: TRefsArray = [];
    for(let i = 0; i < count; i++) {
        refsArray.push(useRef<HTMLDivElement>(null));
    }

    const scrollHandle = (index: number) => {
        if(!refsArray[index])
        return;
        refsArray[index].current?.scrollIntoView();
    };

    return {
        refs: refsArray,
        scrollHandle: scrollHandle
    };
};

export default useScroll;