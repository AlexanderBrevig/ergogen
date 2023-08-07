module.exports = {
  params: {
    designator: 'LED',
    side: 'F',
    din: undefined,
    dout: undefined,
    VCC: { type: 'net', value: 'RAW' },
    GND: { type: 'net', value: 'GND' }
  },
  body: p => `

      (module SK6812MINIE (layer F.Cu) (tedit 53BEE616)
          ${p.at /* parametric position */}

          ${'' /* footprint reference */}
          (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
          (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

          (fp_poly
            (pts
              (xy -2.98 -1.4)
              (xy -2.38 -1.4)
              (xy -2.38 -2)
            )
            (stroke (width 0.1) (type solid)) (fill solid) (layer "F.SilkS"))
          (fp_poly
            (pts
              (xy 2.8 1.4)
              (xy 2.2 1.4)
              (xy 2.2 2)
            )
            (stroke (width 0.1) (type solid)) (fill solid) (layer "B.SilkS"))
          (fp_line (start -1.6 -1.4) (end 1.6 -1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User"))
          (fp_line (start -1.6 1.4) (end -1.6 -1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User"))
          (fp_line (start 1.6 -1.4) (end 1.6 1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User"))
          (fp_line (start 1.6 1.4) (end -1.6 1.4) (stroke (width 0.12) (type solid)) (layer "Cmts.User"))
          (fp_line (start -1.7 -1.5) (end 1.7 -1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
          (fp_line (start -1.7 1.5) (end -1.7 -1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
          (fp_line (start 1.7 -1.5) (end 1.7 1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
          (fp_line (start 1.7 1.5) (end -1.7 1.5) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
          (pad "1" smd rect (at -2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.VCC.str})
          (pad "1" smd rect (at 2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.VCC.str})
          (pad "2" smd rect (at -2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.dout.str})
          (pad "2" smd rect (at 2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.dout.str})
          (pad "3" smd rect (at -2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.GND.str})
          (pad "3" smd rect (at 2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND.str})
          (pad "4" smd rect (at -2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.din.str})
          (pad "4" smd rect (at 2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.din.str})
          (model "\${KIPRJMOD}/3d/LED_SK6812MINI-E.step" hide
            (offset (xyz 0 -5.1 -1.74))
            (scale (xyz 1 1 1))
            (rotate (xyz 0 -180 180))
          )
          (model "\${KIPRJMOD}/3d/LED_SK6812MINI-E.step"
            (offset (xyz 0 5.1 0.1))
            (scale (xyz 1 1 1))
            (rotate (xyz 0 0 0))
          )
        )

    `

}