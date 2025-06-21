type StateForm = {
  name: { value: string; errors: string };
  email: { value: string; errors: string };
  message: { value: string; errors: string };
  subject: { value: string; errors: string };
};
export const initState: StateForm = {
  name: { value: '', errors: '' },
  email: { value: '', errors: '' },
  message: { value: '', errors: '' },
  subject: { value: '', errors: '' },
};

export const reducer = (
  state: StateForm,
  action: { type: string; value: string }
): StateForm => {
  const { type, value } = action;
  switch (type) {
    case 'name':
      return { ...state, name: { value, errors: '' } };
    case 'nameErr':
      return { ...state, name: { value: '', errors: value } };
    case 'email':
      return { ...state, email: { value, errors: '' } };
    case 'emailErr':
      return { ...state, email: { value: '', errors: value } };
    case 'message':
      return { ...state, message: { value, errors: '' } };
    case 'messageErr':
      return { ...state, message: { value: '', errors: value } };
    case 'subject':
      return { ...state, subject: { value, errors: '' } };
    case 'subjectErr':
      return { ...state, subject: { value: '', errors: value } };
    case 'reset':
      return initState;
    default:
      return state;
  }
};
