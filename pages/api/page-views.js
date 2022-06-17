// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const startDate = req.query.startDate || '2022-01-01'
  const slug = req.query.slug

  try {
    res.status(200).json({
      pageViews: 0,
    })
  } catch (err) {
    return res.status(200).json({ error: err.message })
  }
}
