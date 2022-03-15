import { html } from 'lit-html';
import '../upload';

export default {
  title: 'legacy-elements/vl-upload',
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component:
          'Use the upload component to select or drag and drop one or more files in the upload field. Alternatively, the user can upload one or more files by clicking the link in the upload field and selecting the file(s) in the File menu. Documentation: https://webcomponenten.omgeving.vlaanderen.be/doc/VlUpload.html',
      },
    },
  },
  args: {
    // title: undefined,
    // subTitle: undefined,
    // inputName: 'files',
    // url: 'http://httpbin.org/post',
    // fullBodyDrop: false,
    // autoprocess: false,
    // disabled: false,
    // success: false,
    // error: false,
    // acceptedFiles: undefined,
    // errorMessageAcceptedFiles: undefined,
    // maxFiles: undefined,
    // disallowDuplicates: false,
    // errorMessageFilesize: undefined,
    // maxSize: undefined,
    // errorMessageMaxfiles: undefined,
    // titleSlotText: 'Bijlage toevoegen',
    // subTitleSlotText: 'Sleep de bijlage naar hier om toe te voegen',
  },
  argTypes: {
    //   title: {
    //     name: 'data-vl-title',
    //     type: { name: TYPES.STRING, required: false },
    //     description: 'Changes the title of the component.',
    //     table: {
    //       type: {
    //         summary: TYPES.STRING,
    //       },
    //       defaultValue: { summary: 'Bijlage toevoegen' },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   subTitle: {
    //     name: 'data-vl-sub-title',
    //     type: { name: TYPES.STRING, required: false },
    //     description: 'Changes the subtitle of the component.',
    //     table: {
    //       type: {
    //         summary: TYPES.STRING,
    //       },
    //       defaultValue: { summary: 'Sleep de bijlage naar hier om toe te voegen' },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   inputName: {
    //     name: 'data-vl-input-name',
    //     description: 'Defines the key with which the file will be uploaded.',
    //     table: {
    //       type: {
    //         summary: TYPES.STRING,
    //       },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   url: {
    //     name: 'data-vl-url',
    //     description: 'Defines the url to which the component will be uploaded.',
    //     table: {
    //       type: {
    //         summary: TYPES.STRING,
    //       },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   fullBodyDrop: {
    //     name: 'data-vl-full-body-drop',
    //     description:
    //       'Activates the dropzone to be the entire screen. Use the full body drop implementation only for a single upload',
    //     table: {
    //       type: {
    //         summary: TYPES.BOOLEAN,
    //       },
    //       defaultValue: { summary: false },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   autoprocess: {
    //     name: 'data-vl-autoprocess',
    //     description: 'Activates immediate upload of the dropped file.',
    //     table: {
    //       type: {
    //         summary: TYPES.BOOLEAN,
    //       },
    //       defaultValue: { summary: false },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   disabled: {
    //     name: 'data-vl-disabled',
    //     description:
    //       'Disable the upload if a user is not allowed to upload files. Add the attribute to disable user interaction.',
    //     table: {
    //       type: {
    //         summary: TYPES.BOOLEAN,
    //       },
    //       defaultValue: { summary: false },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   success: {
    //     name: 'data-vl-success',
    //     description:
    //       'Adds an success state to the overall upload form element. This state can be used to indicate that the field is valid in a form.',
    //     table: {
    //       type: {
    //         summary: TYPES.BOOLEAN,
    //       },
    //       defaultValue: { summary: false },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   error: {
    //     name: 'data-vl-error',
    //     description:
    //       'Adds an error state to the overall upload form element. This state can be used to indicate that the field is mandatory in a form.',
    //     table: {
    //       type: {
    //         summary: TYPES.BOOLEAN,
    //       },
    //       defaultValue: { summary: false },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   acceptedFiles: {
    //     name: 'data-vl-accepted-files',
    //     description:
    //       'Makes it possible to specify a type of file (or files) you want to allow in the upload by giving a comma separated list of file extensions or mime types.',
    //     type: { name: TYPES.STRING, required: false },
    //     table: {
    //       type: {
    //         summary: TYPES.STRING,
    //       },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   errorMessageAcceptedFiles: {
    //     name: 'data-vl-error-message-accepted-files',
    //     description: 'Defined the message to be shown when non-accepted files were added.',
    //     type: { name: TYPES.STRING, required: false },
    //     table: {
    //       type: {
    //         summary: TYPES.STRING,
    //       },
    //       defaultValue: { summary: 'Dit bestandstype is niet toegestaan.' },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   maxFiles: {
    //     name: 'data-vl-max-files',
    //     description: 'Sets the maximum amount of files that can be uploaded.',
    //     type: { name: TYPES.NUMBER, required: false },
    //     table: {
    //       type: {
    //         summary: TYPES.NUMBER,
    //       },
    //       defaultValue: { summary: 1 },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   disallowDuplicates: {
    //     name: 'data-vl-disallow-duplicates',
    //     description: 'Disallows uploading the same file over and over again',
    //     table: {
    //       type: {
    //         summary: TYPES.BOOLEAN,
    //       },
    //       defaultValue: { summary: false },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   errorMessageMaxfiles: {
    //     name: 'data-vl-error-message-maxfiles',
    //     description: 'Specifies the error message that is displayed when the maximum file number is exceeded.',
    //     type: { name: TYPES.STRING, required: false },
    //     table: {
    //       type: {
    //         summary: TYPES.STRING,
    //       },
    //       defaultValue: { summary: 'Je kan maximaal {maxFiles} bestand(en) uploaden.' },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   maxSize: {
    //     name: 'data-vl-max-size',
    //     description:
    //       'Specifies the maximum file size (in bytes), if the user uploads one or more files that exceed that size, an error is triggered.',
    //     type: { name: TYPES.NUMBER, required: false },
    //     table: {
    //       type: {
    //         summary: TYPES.NUMBER,
    //       },
    //       defaultValue: { summary: 20000 },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   errorMessageFilesize: {
    //     name: 'data-vl-error-message-filesize',
    //     description: 'Specifies the error message displayed when the maximum file size is exceeded.',
    //     type: { name: TYPES.STRING, required: false },
    //     table: {
    //       type: {
    //         summary: TYPES.STRING,
    //       },
    //       defaultValue: { summary: 'Het bestand mag maximaal {maxSize} zijn.' },
    //       category: CATEGORIES.ATTRIBUTES,
    //     },
    //   },
    //   titleSlotText: {
    //     name: 'title',
    //     description: 'Changes the title of the component.',
    //     table: {
    //       type: {
    //         summary: TYPES.STRING,
    //       },
    //       category: CATEGORIES.SLOTS,
    //     },
    //     control: { disable: true },
    //   },
    //   subTitleSlotText: {
    //     name: 'sub-title',
    //     description: 'Changes the subtitle of the component.',
    //     table: {
    //       type: {
    //         summary: TYPES.STRING,
    //       },
    //       category: CATEGORIES.SLOTS,
    //     },
    //     control: { disable: true },
    //   },
    //   clear: {
    //     name: 'clear',
    //     description: 'Deletes all files in the dropzone.',
    //     table: {
    //       type: {
    //         summary: 'function',
    //       },
    //       category: CATEGORIES.METHODS,
    //     },
    //   },
  },
};

export const Default = () => html`<vl-upload url="http://httpbin.org/post" data-vl-input-name="files"></vl-upload> `;

// export const Default = ({
//   title,
//   subTitle,
//   inputName,
//   url,
//   fullBodyDrop,
//   autoprocess,
//   disabled,
//   success,
//   error,
//   acceptedFiles,
//   errorMessageAcceptedFiles,
//   maxFiles,
//   disallowDuplicates,
//   errorMessageMaxfiles,
//   maxSize,
//   errorMessageFilesize,
// }) =>
//   html`<vl-upload
//     data-vl-title=${ifDefined(title)}
//     data-vl-sub-title=${ifDefined(subTitle)}
//     data-vl-input-name=${inputName}
//     data-vl-url=${url}
//     ?data-vl-full-body-drop=${fullBodyDrop}
//     ?data-vl-autoprocess=${autoprocess}
//     ?data-vl-disabled=${disabled}
//     ?data-vl-success=${success}
//     ?data-vl-error=${error}
//     data-vl-accepted-files=${ifDefined(acceptedFiles)}
//     data-vl-error-message-accepted-files=${ifDefined(errorMessageAcceptedFiles)}
//     data-vl-max-files=${ifDefined(maxFiles)}
//     data-vl-error-message-maxfiles=${ifDefined(errorMessageMaxfiles)}
//     data-vl-disallow-duplicates=${disallowDuplicates}
//     data-vl-max-size=${ifDefined(maxSize)}
//     data-vl-error-message-filesize=${ifDefined(errorMessageFilesize)}
//   ></vl-upload>`;

// export const WithSlots = ({
//   titleSlotText,
//   subTitleSlotText,
//   inputName,
//   url,
//   fullBodyDrop,
//   autoprocess,
//   disabled,
//   success,
//   error,
//   acceptedFiles,
//   errorMessageAcceptedFiles,
//   maxFiles,
//   disallowDuplicates,
//   errorMessageMaxfiles,
//   maxSize,
//   errorMessageFilesize,
// }) =>
//   html`<vl-upload
//     data-vl-input-name=${inputName}
//     data-vl-url=${url}
//     ?data-vl-full-body-drop=${fullBodyDrop}
//     ?data-vl-autoprocess=${autoprocess}
//     ?data-vl-disabled=${disabled}
//     ?data-vl-success=${success}
//     ?data-vl-error=${error}
//     data-vl-accepted-files=${ifDefined(acceptedFiles)}
//     data-vl-error-message-accepted-files=${ifDefined(errorMessageAcceptedFiles)}
//     data-vl-max-files=${ifDefined(maxFiles)}
//     data-vl-error-message-maxfiles=${ifDefined(errorMessageMaxfiles)}
//     data-vl-disallow-duplicates=${disallowDuplicates}
//     data-vl-max-size=${ifDefined(maxSize)}
//     data-vl-error-message-filesize=${ifDefined(errorMessageFilesize)}
//   >
//     <span slot="title">${titleSlotText}</span>
//     <span slot="sub-title">${subTitleSlotText}</span>
//   </vl-upload>`;

// WithSlots.argTypes = {
//   title: { control: { disable: true } },
//   subTitle: { control: { disable: true } },
//   titleSlotText: { control: { disable: false } },
//   subTitleSlotText: { control: { disable: false } },
// };
