// Via
// Nets
//		net: the net this via should be connected to

module.exports = {
  params: {
    net: undefined
  },
  body: p => `
      (module TENTINGPUCK (layer F.Cu) (tedit 591DBFB0)
      ${p.at /* parametric position */}   
      ${'' /* footprint reference */}
      (fp_text reference "REF**" (at 7.6835 1.4605) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "Tenting Puck" (at 8.0645 -2.8575) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
      (fp_circle (center 0 0) (end 20.55 0) (stroke (width 0.55) (type solid)) (fill none) (layer "B.CrtYd"))
      (fp_line (start -17.6 10) (end -17.6 -10) (stroke (width 0.2) (type solid)) (layer "F.CrtYd"))
      (fp_line (start -1.6 19.05) (end -1.6 -19.05) (stroke (width 0.2) (type solid)) (layer "F.CrtYd"))
      (fp_line (start 1.6 19.05) (end 1.6 -19.05) (stroke (width 0.2) (type solid)) (layer "F.CrtYd"))
      (fp_line (start 17.6 10) (end 17.6 -10) (stroke (width 0.2) (type solid)) (layer "F.CrtYd"))
      (pad "" np_thru_hole circle (at 0 0) (size 6.8 6.8) (drill 6.2) (layers "*.Mask"))
      (pad "1" thru_hole circle (at -19.05 0) (size 4.4 4.4) (drill 2.2) (layers "*.Cu" "*.Mask") ${p.net.str})
      (pad "1" thru_hole circle (at 0 -19.05) (size 4.4 4.4) (drill 2.2) (layers "*.Cu" "*.Mask") ${p.net.str})
      (pad "1" thru_hole circle (at 0 19.05) (size 4.4 4.4) (drill 2.2) (layers "*.Cu" "*.Mask") ${p.net.str})
      (pad "1" thru_hole circle (at 19.05 0) (size 4.4 4.4) (drill 2.2) (layers "*.Cu" "*.Mask") ${p.net.str})
    )
    `
}