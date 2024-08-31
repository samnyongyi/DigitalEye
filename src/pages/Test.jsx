import React, { useState } from 'react';

function Test() {
    const [inputText, setInputText] = useState('');
    const [audioContent, setAudioContent] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const base64ToBlob = (base64, fileType) => {
        let typeHeader = "data:application/" + fileType + ";base64,"; // base64 헤더 파일 유형 정의
        let audioSrc = typeHeader + base64;
        let arr = audioSrc.split(",");
        let array = arr[0].match(/:(.*?);/);
        let mime = (array && array.length > 1 ? array[1] : fileType) || fileType;
        let bytes = window.atob(arr[1]);
        let ab = new ArrayBuffer(bytes.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
        }
        return new Blob([ab], { type: mime });
    };

    const testFun = async () => {
        const data = {
            voice: {
                languageCode: "ko-KR"
            },
            input: {
                text: inputText
            },
            audioConfig: {
                audioEncoding: "mp3"
            }
        };

        try {
            const response = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyBQoVndqK5Q4nixip4vXs4B_ClImhcBk5k', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch the audio content');
            }

            const res = await response.json();
            setAudioContent(res.audioContent);

            let audioFile = new Audio();
            let audioBlob = base64ToBlob(res.audioContent, "mp3");
            audioFile.src = window.URL.createObjectURL(audioBlob);
            audioFile.playbackRate = 1; // 재생 속도
            audioFile.play();
        } catch (error) {
            alert("오류: 오류가 발생하였습니다. 관리자에게 문의해주세요.");
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <textarea
                rows="5"
                cols="20"
                value={inputText}
                onChange={handleInputChange}
                placeholder="텍스트를 입력하세요"
            ></textarea>
            <br />
            <button onClick={testFun}>텍스트 음성 변환 실행</button>
            <br />
            <textarea
                rows="5"
                cols="20"
                value={audioContent}
                readOnly
                placeholder="여기에 음성 변환 결과가 표시됩니다"
            ></textarea>
        </div>
    );
}

export default Test;