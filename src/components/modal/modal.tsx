'use client'

import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import style from  './modal.module.css';
import { useRouter } from "next/navigation";

export default function Modal({ children }:
    {children: ReactNode}
) {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        // 모달이 현재 켜져 있지 않다면?
        if(!dialogRef.current?.open) {
            // 강제로 켜진 상태로 만들기
            dialogRef.current?.showModal();
            // scroll을 Top: 0으로 설정해 최상위로 올리기
            dialogRef.current?.scrollTo({
                top: 0
            });
        }
    }, [])
    

    return createPortal(
        // 처음 렌더링 시 화면에 보이지 않음
        <dialog 
            // 모달이 닫혔을 때 뒤로가기
            onClose={() => router.back()}
            onClick={(e) => {
                // 모달의 배경이 클릭이 된 거면 뒤로가기
                if((e.target as any).nodeName === 'DIALOG') {
                    router.back();
                }}}
            className={style.modal}
            ref={dialogRef} >{children}</dialog>, 
        document.getElementById('modal-root') as HTMLElement
    );
}