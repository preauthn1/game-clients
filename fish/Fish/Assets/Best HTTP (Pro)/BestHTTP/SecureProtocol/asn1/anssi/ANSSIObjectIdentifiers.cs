#if !BESTHTTP_DISABLE_ALTERNATE_SSL && (!UNITY_WEBGL || UNITY_EDITOR)
using System;

namespace Org.BouncyCastle.Asn1.Anssi
{
    public sealed class AnssiObjectIdentifiers
    {
        private AnssiObjectIdentifiers()
        {
        }

        public static readonly DerObjectIdentifier FRP256v1 = new DerObjectIdentifier("0.0.0.0.0.0.0.0");
    }
}

#endif
