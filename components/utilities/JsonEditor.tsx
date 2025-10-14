import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-chrome";

import "ace-builds/src-noconflict/ext-language_tools";

interface JsonEditorProps {
    value: string;
    onChange: (value: string) => void;
    height?: string;
    width?: string;
    readOnly?: boolean;
}

const JsonEditor: React.FC<JsonEditorProps> = ({value, onChange, height = "250px", width = "100%", readOnly = false}) => {
    return (
        <AceEditor
            mode="json"
            theme="chrome"
            name="json-editor"
            value={value}
            onChange={onChange}
            fontSize={14}
            width={width}
            height={height}
            readOnly={readOnly}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }}
            editorProps={{ $blockScrolling: true }}
        />
    );
};

export default JsonEditor;
