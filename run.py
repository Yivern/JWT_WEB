import sys
from pathlib import Path

path_root = Path(__file__).parents[1]
sys.path.append(str(path_root))

from proyecto_login.core.infraestructure.UI.api.server import run

run()