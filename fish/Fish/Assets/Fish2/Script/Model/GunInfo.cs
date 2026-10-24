namespace P8Games.MicroFish
{
    public class GunInfo {

		private int _type;
		private string _name;
		private float _shootInterval;
		private int _bulletType;

		public GunInfo(int _type, string _name, float _shootingInterval, int _bulletType){
			
			this._type = _type;
			this._name = _name;
			this._shootInterval = _shootingInterval;
			this._bulletType = _bulletType;
		}

		public int type{

			get{
				return _type;
			}
		}

		public string name{

			get{
				return _name;
			}
		}

		public float shootingInterval{

			get{
				return _shootInterval;
			}
		}

		public int bulletType {

			get{
				return _bulletType;
			}
		}
	}
}