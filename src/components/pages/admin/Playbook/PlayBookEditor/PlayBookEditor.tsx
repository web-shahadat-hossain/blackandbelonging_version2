import grapesjs from 'grapesjs';
import basicPlugin from 'grapesjs-blocks-basic';
import formPlugin from 'grapesjs-plugin-forms';
import webPlugin from 'grapesjs-preset-webpage';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs/dist/grapes.min.js';
import { useEffect } from "react";
import "./PlayBookEditor.scss";
// @ts-ignore
import grapejsRulers from 'grapesjs-rulers';
// @ts-ignore
import flexbox from 'grapesjs-blocks-flexbox';
// @ts-ignore
import tabs from 'grapesjs-tabs';
import "./PlayBookEditor.scss";

const PlayBookEditor = ({ editorId, setEditor, initialHTML, initialCSS }: { initialCSS?: string, initialHTML: string, setEditor: any, editorId: string }) => {
    useEffect(() => {
        const ed = grapesjs.init({
            container: `#${editorId}`,
            height: '800px',
            width: '100%',
            plugins: [basicPlugin, formPlugin, webPlugin, grapejsRulers, tabs, flexbox],
            // storageManager: {
            //     id: 'gjs-',
            //     type: 'local',
            //     autosave: true,
            // },
            storageManager: false,
            deviceManager: {
                devices: [
                    {
                        id: 'desktop',
                        name: 'Desktop',
                        width: '',
                    },
                    {
                        id: 'tablet',
                        name: 'Tablet',
                        width: '768px',
                        widthMedia: '992px',
                    },
                    {
                        id: 'mobilePortrait',
                        name: 'Mobile portrait',
                        width: '320px',
                        widthMedia: '575px',
                    },
                ],
            },
            pluginsOpts: {
                'grapesjs-preset-webpage': {
                    blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map'],
                },
            },
        });
        // Set initial HTML content
        ed.setComponents(initialHTML);
        ed.setStyle((initialCSS || "") + ` img { max-width: 100% } body { padding-bottom: 100px }`);

        setEditor(ed);
        return () => {
            ed.destroy();
        }
    }, [setEditor, editorId, initialHTML, initialCSS]);

    return (
        <div className="playbook_editor">
            <div id={`${editorId}`}></div>
        </div>
    );
}

export default PlayBookEditor
