type Profile = {
  identifier: string,
}

export type Validate = (
  identifier: string,
  profile: Profile,
  done: (err: null, profile: Profile) => void,
) => void
