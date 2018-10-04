const i18n = {
  id: 'ID',
  required: 'Required',
  name: 'Name',
  email: 'Email',
  company: 'Company',
  cancel: 'Cancel',
  edit: 'Edit',
  save: 'Save',
  back: 'Back',
  charsNotAllowed: 'You entered disallowed characters',
  minCharsThree: 'Please enter at least 3 characters',
  minCharsFour: 'Please enter at least 4 characters',
  correctName: 'Please enter a correct name',
  correctEmail: 'Please enter a correct email address'
}

const rex = {
  // Regex collection
  name: /^[a-zA-Z '.-]*$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

export { i18n, rex }
