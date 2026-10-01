export default defineAppConfig({
  ui: {
    badge: { // breaks with partial object
      slots: {
        base: 'font-medium inline-flex items-center',
        label: 'truncate font-bold',
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailingIcon: 'shrink-0'
      }
    },
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  }
})
