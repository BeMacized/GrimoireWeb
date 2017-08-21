export const hasPerms = (level, perm) => {
  // I'm so, so sorry.
  // Check if bit 'perm' is set within 'level'
  return (level>>>0).toString(2).split('').reverse().join('').substring(Math.log2(perm), Math.log2(perm)+1) === '1'
}

export const MANAGE_GUILD = 0x00000020
