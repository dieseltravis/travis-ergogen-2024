// ergogen logo
module.exports = {
    params: {
        designator: 'LOGO',
        side: 'F'
    },
    body: p => `
    (module ergogen (layer "${p.side}.Cu") (tedit 0)
    ${p.at /* parametric position */}
    (attr virtual)
    (fp_text reference "${p.ref}" (at 4.572 0 0) (layer "${p.side}.SilkS") hide
      (effects (font (size 1 1) (thickness 0.1)))
    )

    (fp_poly (pts (xy 2.501231 0)
      (xy 2.501231 2.501231)
      (xy 0 2.501231)
      (xy -2.50123 2.501231)
      (xy -2.50123 1.013088)
      (xy -1.738355 1.013088)
      (xy -0.021885 1.009917)
      (xy 1.694584 1.006746)
      (xy 1.697905 0.662827)
      (xy 1.701225 0.318907)
      (xy 1.52891 0.490867)
      (xy 1.356594 0.662827)
      (xy -0.19088 0.662827)
      (xy -1.738355 0.662827)
      (xy -1.738355 0.837957)
      (xy -1.738355 1.013088)
      (xy -2.50123 1.013088)
      (xy -2.50123 0.150074)
      (xy -1.394101 0.150074)
      (xy -0.637478 0.150074)
      (xy 0.119144 0.150074)
      (xy 0.293895 -0.025012)
      (xy 0.468646 -0.200098)
      (xy -0.287976 -0.200098)
      (xy -1.044599 -0.200098)
      (xy -1.21935 -0.025012)
      (xy -1.394101 0.150074)
      (xy -2.50123 0.150074)
      (xy -2.50123 0)
      (xy -2.50123 -1.063023)
      (xy -1.738355 -1.063023)
      (xy -1.738355 -0.887937)
      (xy -1.738355 -0.71285)
      (xy -0.190545 -0.71285)
      (xy 1.357266 -0.71285)
      (xy 1.525751 -0.544017)
      (xy 1.578342 -0.491483)
      (xy 1.624575 -0.445614)
      (xy 1.661679 -0.409133)
      (xy 1.686885 -0.384763)
      (xy 1.697422 -0.375226)
      (xy 1.697537 -0.375184)
      (xy 1.698399 -0.387158)
      (xy 1.699177 -0.420952)
      (xy 1.69984 -0.473372)
      (xy 1.700359 -0.541225)
      (xy 1.700701 -0.62132)
      (xy 1.700836 -0.710463)
      (xy 1.700837 -0.719103)
      (xy 1.700837 -1.063023)
      (xy -0.018759 -1.063023)
      (xy -1.738355 -1.063023)
      (xy -2.50123 -1.063023)
      (xy -2.50123 -2.50123)
      (xy 0 -2.50123)
      (xy 2.501231 -2.50123)) (layer "${p.side}.SilkS") (width 0.01))
  )`
};