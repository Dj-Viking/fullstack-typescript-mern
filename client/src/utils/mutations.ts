

export const REGISTER_MUTATION = `
  mutation register($options: UsernamePasswordInput!)
  {
    register(options: $options)
    {
      errors{
        field
        message
      }
      user{
        id
        username
        createdAt
        updatedAt
      }
    }
  }`
;